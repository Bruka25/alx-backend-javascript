import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoRes, userRes] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoRes,
      user: userRes
    };
  } catch (error) {
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
