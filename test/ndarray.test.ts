import NDArray from '../src/array';

describe('NDArray', () => {
  describe('reshape', () => {
    it('should reshape an array into a 2x3 array', () => {
      const array = new NDArray([1, 2, 3, 4, 5, 6]);
      const reshapedArray = array.reshape([2, 3]);
      expect(reshapedArray.shape).toEqual([2, 3]);
      expect(reshapedArray.data).toEqual([
        [1, 2, 3],
        [4, 5, 6],
      ]);
    });

    it('should throw an error when reshaping to a different size', () => {
      const array = new NDArray([1, 2, 3, 4, 5, 6]);
      expect(() => array.reshape([2, 2])).toThrowError(
        'Original and new shape are different, cannot reshape.'
      );
    });
  });

  describe('isSquare', () => {
    it('should return true for a square array', () => {
      const array = new NDArray([
        [1, 2],
        [3, 4],
      ]);
      expect(array.isSquare()).toBe(true);
    });

    it('should return false for a non-square array', () => {
      const array = new NDArray([
        [1, 2, 3],
        [4, 5, 6],
      ]);
      expect(array.isSquare()).toBe(false);
    });
  });

  describe('ravel', () => {
    it('should flatten a 2x3 array into a 1D array', () => {
      const array = new NDArray([
        [1, 2, 3],
        [4, 5, 6],
      ]);
      const flattenedArray = array.ravel();
      expect(flattenedArray.shape).toEqual([6]);
      expect(flattenedArray.data).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('toString', () => {
    it('should return a string representation of the array shape', () => {
      const array = new NDArray([1, 2, 3]);
      expect(array.toString()).toBe('Shape: 3');
    });
  });
});
