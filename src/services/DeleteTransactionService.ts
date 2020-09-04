import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(transactionId: string): Promise<void> {
    const transactionsRepository = await getCustomRepository(
      TransactionsRepository,
    );

    const transaction = await transactionsRepository.findOne(transactionId);

    if (!transaction) {
      throw new AppError('Transaction does not exists');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
