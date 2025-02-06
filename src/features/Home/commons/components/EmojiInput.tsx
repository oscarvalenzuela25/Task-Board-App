import { FC } from 'react';
import { Emojis } from '../../../../utils/Emojis';
import { cva } from 'class-variance-authority';

type Props = {
  emoji: string;
  emojiSelected: string | null;
  handleSelectEmoji: ({ name, value }: { name: string; value: string }) => void;
};

const emojiInputVariants = cva(
  'flex justify-center items-center rounded-lg cursor-pointer p-3',
  {
    variants: {
      isSelected: {
        selected: 'bg-orange-custom',
        unSelected: 'bg-light-gray-custom',
      },
    },
    defaultVariants: {
      isSelected: 'unSelected',
    },
  }
);

const EmojiInput: FC<Props> = ({ emoji, handleSelectEmoji, emojiSelected }) => {
  const isSelected = emojiSelected === emoji ? 'selected' : 'unSelected';
  const renderEmoji = Emojis.getEmoji(emoji);
  const classes = emojiInputVariants({ isSelected });

  return (
    <div
      className={classes}
      onClick={() => handleSelectEmoji({ name: 'emoji', value: emoji })}
    >
      {renderEmoji}
    </div>
  );
};

export default EmojiInput;
