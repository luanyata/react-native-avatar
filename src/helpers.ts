import type { TextStyle } from 'react-native';

/**
 * @description Get user initials from user name
 * @example
 * const userName = 'John Doe';
 * const initials = getUserInitial({ userName });
 * console.log(initials); // JD
 * @example
 * const userName = 'John';
 * const initials = getUserInitial({ userName });
 * console.log(initials); // J
 */
export const getUserInitial = ({ userName = '' }: UserInitialProps): string => {
  const parts = userName ? userName.split(/[ -]/) : [];

  let initials = '';

  for (let i = 0; i < parts.length; i += 1) {
    initials += parts[i]?.charAt(0) ?? '';
  }

  if (initials.length > 2 && initials.search(/[A-Z]/) !== -1) {
    initials = initials.replace(/[a-z]+/g, '');
  }

  return initials.substring(0, 2).toUpperCase();
};

interface UserInitialProps {
  userName?: string;
}

/**
 * @description Get container style
 * @example const size = 50;
const rounded = true;
const containerStyle = getContainerStyle({ size, rounded });
console.log(containerStyle); // { width: 50, height: 50, borderRadius: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }
 */
export const getContainerStyle = ({
  size,
  rounded,
}: ContainerStyleProps): object => {
  return {
    width: size,
    height: size,
    borderRadius: rounded ? size : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };
};

interface ContainerStyleProps {
  size: number;
  rounded?: boolean;
}

/**
 * @description Get text style
 * @example const size = 50;
const textColor = '#000';
const fontSize = 20;
const textStyle = getTextStyle({ size, textColor, fontSize });
console.log(textStyle); // { color: '#000', fontSize: 20, fontWeight: '500' }
 * @example const size = 50;
const textColor = '#000';
const textStyle = getTextStyle({ size, textColor });
console.log(textStyle); // { color: '#000', fontSize: 25, fontWeight: '500' }
 */
export const getTextStyle = ({
  size,
  textColor,
  fontSize,
}: TextStyleProps): TextStyle => {
  return {
    color: textColor,
    fontSize: fontSize ? fontSize : size / 2,
    fontWeight: '500',
  };
};

interface TextStyleProps {
  size: number;
  textColor: string;
  fontSize?: number;
}

/**
 * @description Get random color
 * @example const userName = 'John Doe';
const backgroundColors = ['#000', '#fff'];
const randomColor = getRandomColor({ userName, backgroundColors });
console.log(randomColor); // #000
 * @example const userName = 'John Doe';
const backgroundColors = [];
const randomColor = getRandomColor({ userName, backgroundColors });
console.log(randomColor); // #000
 * @example const userName = 'John Doe';
const backgroundColors = [];
const randomColor = randomColor({ userName, backgroundColors });
console.log(randomColor); // #000
 */
export const getRandomColor = ({
  userName,
  backgroundColors,
}: RandomColorProps) => {
  if (backgroundColors.length) {
    return backgroundColors[
      Math.floor(Math.random() * backgroundColors.length)
    ];
  }
  let hash = 0;

  for (let i = 0; i < userName.length; i++) {
    // eslint-disable-next-line no-bitwise
    hash = userName.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';

  for (let i = 0; i < 3; i++) {
    // eslint-disable-next-line no-bitwise
    let value = (hash >> (i * 8)) & 0xff;

    color += ('00' + value.toString(16)).substring(-2);
  }

  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, (value) =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(value, 16) + -20)).toString(16)
        ).substring(-2)
      )
  );
};

interface RandomColorProps {
  userName: string;
  backgroundColors: string[];
}
