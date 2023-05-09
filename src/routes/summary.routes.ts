// In your api folder, you can create a file called userRoutes.ts
import express from 'express';
import { SummaryController } from '../controllers/summary.controller';

const summaryRouter = express.Router();

summaryRouter.post('/retrieve-documents', SummaryController.retrieveDocumentsAPI);
summaryRouter.post('/summarise-document', SummaryController.summariseDocumentAPI);
summaryRouter.post('/video-summary', SummaryController.retrieveVideoSummaryAPI);

export default summaryRouter;