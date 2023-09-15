import {
  getUserInitial,
  getContainerStyle,
  getTextStyle,
  getRandomColor,
} from '../helpers';

describe('getUserInitial', () => {
  it('should return the initials of a full name', () => {
    expect(getUserInitial({ userName: 'John Doe' })).toBe('JD');
  });

  it('should return the first letter of a single name', () => {
    expect(getUserInitial({ userName: 'John' })).toBe('J');
  });

  it('should return an empty string if no name is provided', () => {
    expect(getUserInitial({})).toBe('');
  });
});

describe('getContainerStyle', () => {
  it('should return a container style object with rounded corners', () => {
    expect(getContainerStyle({ size: 50, rounded: true })).toEqual({
      width: 50,
      height: 50,
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    });
  });

  it('should return a container style object with square corners', () => {
    expect(getContainerStyle({ size: 50, rounded: false })).toEqual({
      width: 50,
      height: 50,
      borderRadius: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    });
  });
});

describe('getTextStyle', () => {
  it('should return a text style object with the specified font size and color', () => {
    expect(getTextStyle({ size: 50, textColor: '#000', fontSize: 20 })).toEqual(
      {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
      }
    );
  });

  it('should return a text style object with a default font size if none is specified', () => {
    expect(getTextStyle({ size: 50, textColor: '#000' })).toEqual({
      color: '#000',
      fontSize: 25,
      fontWeight: '500',
    });
  });
});

describe('getRandomColor', () => {
  it('should return a random color from the provided array', () => {
    expect(
      getRandomColor({
        userName: 'John Doe',
        backgroundColors: ['#000', '#fff'],
      })
    ).toMatch(/#000|#fff/);
  });

  it('should return a default color if no background colors are provided', () => {
    expect(
      getRandomColor({ userName: 'John Doe', backgroundColors: [] })
    ).toMatch(/#[0-9a-fA-F]{6}/);
  });

  it('should return a default color if no background colors are provided and the function is called with the wrong name', () => {
    expect(getRandomColor({ userName: '', backgroundColors: [] })).toMatch(
      /#[0-9a-fA-F]{6}/
    );
  });
});
