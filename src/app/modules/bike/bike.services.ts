import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TBike } from './bike.interface'
import { Bike } from './bike.model'
import { JwtPayload } from 'jsonwebtoken'

const createBikeIntoDB = async (payload: TBike) => {
  try {
    const result = await Bike.create(payload)
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create Bike')
  }
}

const getAllBikeFromDB = async () => {
  try {
    const result = await Bike.find()
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to retrieved Bike')
  }
}
const updateBikeIntoDB = async (id: string, payload: Partial<TBike>) => {
  try {
    const result = await Bike.findByIdAndUpdate(id, payload, {
      upsert: true,
      new: true,
      runValidators: true,
    })
    return result
  } catch (error) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to update Bike')
  }
}

export const BikeServices = {
  createBikeIntoDB,
  getAllBikeFromDB,
  updateBikeIntoDB,
}
