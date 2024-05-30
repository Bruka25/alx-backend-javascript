import ClassRoom from './0-classroom';

// Implement the initializeRooms function
function initializeRooms() {
  // Create an array of ClassRoom objects with sizes 19, 20, and 34
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];

  // Return the array of ClassRoom objects
  return rooms;
}

// Export the initializeRooms function as the default export
export default initializeRooms;
