const axios = require('axios');
const { BookingRepository } = require('../repository/index');
const {
  TRAIN_SERVICE_PATH,
  AUTH_SERVICE_PATH,
} = require('../config/serverConfig');
const { ServiceError } = require('../utils/errors');
const { stringify } = require('flatted');
function safeStringify(obj) {
  const seen = new WeakSet();
  return JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return; // Skip circular reference
        }
        seen.add(value);
      }
      return value;
    },
    2
  );
}

class BookingService {
  constructor() {
    this.BookingRepository = new BookingRepository();
  }

  async createBooking(data) {
    try {
      const { train_id, user_id, category_id, passengerData } = data;

      // The number of seats is determined by the length of the passenger array
      const noOfSeats = passengerData.length;

      // Fetch train and category data to validate seats
      const trainResponse = await axios.get(
        `${TRAIN_SERVICE_PATH}/api/v1/trainInfo/${train_id}`
      );
      console.log('train response: ' + safeStringify(trainResponse.data.data));
      const trainData = JSON.parse(safeStringify(trainResponse.data.data));
      const categoryResponse = await axios.get(
        `${TRAIN_SERVICE_PATH}/api/v1/category/${category_id}`
      );
      console.log('train_id', trainData.id);
      console.log(
        'category response: ' + safeStringify(categoryResponse.data.data)
      );
      const categoryData = JSON.parse(
        safeStringify(categoryResponse.data.data)
      );
      const categorySeatsAvailable = categoryData.category_seats;
      console.log('seats available: ' + categorySeatsAvailable);
      if (noOfSeats > categorySeatsAvailable) {
        throw new ServiceError('Insufficient seats in the selected category.');
      }

      const createdPassengerId = await Promise.all(
        passengerData.map(async (passenger) => {
          try {
            const response = await axios.post(
              `${AUTH_SERVICE_PATH}/api/v1/passenger`,
              {
                user_id,
                train_id,
                category_id,
                name: passenger.name,
                age: passenger.age,
                date: Date.now(),
                seat_number: categorySeatsAvailable,
              }
            );
            console.log('passender data: ' + safeStringify(response));
            return response.data.id; // Collect passenger ID from the response
          } catch (error) {
            console.error(
              'Error creating passenger:',
              error.response?.data || error.message
            );
            throw new Error('Failed to create passenger');
          }
        })
      );

      // After passengers are created, calculate total cost for the booking
      const totalCost = categoryResponse.data.base_price * noOfSeats;

      // Create the booking entry
      const bookingPayload = {
        train_id,
        user_id,
        category_id,
        passenger_id: createdPassengerId,
        no_of_seats: noOfSeats,
        src_station_id,
        date: Date.now(),
        dest_station_id,
        booking_status: 'pending',
        price: totalCost,
      };

      const booking = await this.BookingRepository.create(bookingPayload);

      // Update the available seats in the category
      const updatedCategorySeats = categorySeatsAvailable - noOfSeats;
      await axios.patch(
        `${TRAIN_SERVICE_PATH}/api/v1/category/${category_id}`,
        {
          category_seats: updatedCategorySeats,
        }
      );

      // Once booking and passengers are linked, mark the booking as completed
      const finalBooking = await this.BookingRepository.update(booking.id, {
        booking_status: 'completed',
      });

      return finalBooking; // Return the final booking
    } catch (error) {
      console.log('Something went wrong at service layer while booking');
      throw { error };
    }
  }
}

module.exports = BookingService;
