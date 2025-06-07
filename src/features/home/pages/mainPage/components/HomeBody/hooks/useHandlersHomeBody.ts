import { Status } from '../../../../../../../API/domain/models/Tasks';
import { Emojis } from '../../../../../../../utils/Emojis';

const useHandlersHomeBody = () => {
  const emojiList = Emojis.emojis;
  const statusList: Status[] = ['IN_PROGRESS', 'DONE', 'CANCELLED', 'DEFAULT'];
  return { emojiList, statusList };
};

export default useHandlersHomeBody;
