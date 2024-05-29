function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }

    return numerator / denominator;
  } catch (error) {
    throw error;
  }
}

export default divideFunction;