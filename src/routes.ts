import { Router} from "express";
import { SubjectController } from "./controllers/SubjectController";
import { RoomController } from "./controllers/RoomController";

const routes = Router()

routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.get('/room', new RoomController().list)
routes.post('/room/:id_Room/create', new RoomController().createVideo)
routes.post('/room/:id_Room/subject', new RoomController().roomSubject)


export default routes

