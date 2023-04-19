import Hotel from "../database/models/hotel";
import Room from "../database/models/room";

// create a hotel
export async function createRoom(req, res) {
    const { name, description, maxAccomodate, floor, roomType, price } = req.body;
    const { hotelId } = req.params
    try {
        const hotel = await Hotel.findOne({
            where: { id: hotelId }
        });
        if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
        const room = await Room.create({ name, description, maxAccomodate, floor, roomType, hotelId, price });
        return res.status(201).json({
            status: true,
            message: "Room created successfully",
            data: room
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

export async function getAllRooms(req, res) {
    try {
        const room = await Room.findAndCountAll();
        return res.status(200).json({
            message:"rooms retreived successfully",
            data:{...room}
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

export async function getAllRoomsInHotel(req,res){
    try {
        const { hotelId } = req.params
        const hotel = await Hotel.findOne({
            where: { id: hotelId }
        });
        if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
        const rooms = await Room.findAndCountAll({
            where:{
                hotelId
            }
        })
        return res.status(200).json({
            message:"Rooms in this hotel retreived successfully",
            data: {...rooms}
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal server error",
            error: error.message
        });
    }
}