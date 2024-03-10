import { Router } from 'express';
import { addIssuesValidator } from '../middlewares/issuesValidator';
import IssuesService from '../service/issues';

const issuesRouter = Router();
const issueService = new IssuesService();

issuesRouter.get('/', issueService.getIssues);
issuesRouter.get('/:id', issueService.getIssue);
issuesRouter.post('/', addIssuesValidator(), issueService.createIssues);

export default issuesRouter;