// In your api folder, you can create a file called userRoutes.ts
import express from 'express';
import { SummaryController } from '../controllers/summary.controller';

const summaryRouter = express.Router();

summaryRouter.post(
  '/retrieve-documents',
  SummaryController.retrieveDocumentsAPI,
);
summaryRouter.post(
  '/summarise-document',
  SummaryController.summariseDocumentAPI,
);
summaryRouter.post('/video-summary', SummaryController.retrieveVideoSummaryAPI);
summaryRouter.post('/delete-document', SummaryController.deleteDocumentAPI);
summaryRouter.post('/delete-video', SummaryController.deleteVideoAPI);
summaryRouter.post(
  '/regenerate-document-summary',
  SummaryController.regenerateDocumentSummaryAPI,
);
summaryRouter.post(
  '/count-total-summary',
  SummaryController.countTotalSummaryAPI,
);
summaryRouter.post(
  '/count-total-document',
  SummaryController.countTotalDocumentAPI,
);
summaryRouter.post('/count-total-video', SummaryController.countTotalVideoAPI);
summaryRouter.post(
  '/group-docs-by-year',
  SummaryController.groupDocumentsByYearAPI,
);
export default summaryRouter;
