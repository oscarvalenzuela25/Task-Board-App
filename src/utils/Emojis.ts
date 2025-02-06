export class Emojis {
  static get emojis() {
    return [
      {
        label: '👨‍💻',
        value: 'personWithNotebook',
      },
      {
        label: '💬',
        value: 'commentBalloon',
      },
      {
        label: '☕',
        value: 'coffeeCup',
      },
      {
        label: '🏋️',
        value: 'weightLifter',
      },
      {
        label: '📚',
        value: 'stackOfBooks',
      },
      {
        label: '⌚',
        value: 'clock',
      },
      {
        label: '😀',
        value: 'grinningFace',
      },
      {
        label: '😍',
        value: 'smilingFaceWithHeartEyes',
      },
      {
        label: '🙏',
        value: 'foldedHands',
      },
      {
        label: '🎉',
        value: 'partyPopper',
      },
      {
        label: '❤️',
        value: 'redHeart',
      },
      {
        label: '🔥',
        value: 'fire',
      },
      {
        label: '✨',
        value: 'sparkles',
      },
      {
        label: '🎂',
        value: 'birthdayCake',
      },
      {
        label: '🚀',
        value: 'rocket',
      },
      {
        label: '🌟',
        value: 'glowingStar',
      },
      {
        label: '🎁',
        value: 'wrappedGift',
      },
      {
        label: '🎶',
        value: 'musicalNotes',
      },
    ];
  }

  static getEmoji(emoji: string) {
    const emojis: Record<string, string> = {
      personWithNotebook: '👨‍💻',
      commentBalloon: '💬',
      coffeeCup: '☕',
      weightLifter: '🏋️',
      stackOfBooks: '📚',
      clock: '⌚',
      grinningFace: '😀',
      smilingFaceWithHeartEyes: '😍',
      foldedHands: '🙏',
      partyPopper: '🎉',
      redHeart: '❤️',
      fire: '🔥',
      sparkles: '✨',
      birthdayCake: '🎂',
      rocket: '🚀',
      glowingStar: '🌟',
      wrappedGift: '🎁',
      musicalNotes: '🎶',
    };

    return emojis[emoji];
  }
}
