// In your api folder, you can create a file called userRoutes.ts
import express from 'express';
import multer from 'multer';

import { SummaryController } from '../controllers/summary.controller';
const upload = multer({ storage: multer.memoryStorage() });

const summaryRouter = express.Router();

summaryRouter.post(
  '/retrieve-documents',
  SummaryController.retrieveDocumentsAPI,
);
summaryRouter.post(
  '/summarise-document',
  SummaryController.summariseDocumentAPI,
);
summaryRouter.post('/video-summary',upload.single('file'), SummaryController.retrieveVideoSummaryAPI);
summaryRouter.delete('/delete-content', SummaryController.deleteContentAPI);
summaryRouter.post(
  '/update-summary',
  SummaryController.updateSummaryAPI,
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
