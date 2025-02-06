import { FC } from 'react';
import { Emojis } from '../../../../utils/Emojis';

type Props = {
  emoji: string;
};

const EmojiTask: FC<Props> = ({ emoji: emojiName }) => {
  const emoji = Emojis.getEmoji(emojiName);
  return (
    <div className="flex justify-center rounded-xl p-3 h-min bg-white-custom min-w-[46px]">
      {emoji}
    </div>
  );
};

export default EmojiTask;
