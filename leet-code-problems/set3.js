const sampleArray = [
  {
    bedType: "Single Bed",
    numberOfRooms: 10,
    count: 2,
    bedCombinationId: "2-2-17-2365e391",
  },
  {
    bedType: "Double Bed",
    numberOfRooms: 10,
    count: 3,
    bedCombinationId: "2-2-17-2365e391",
  },
  {
    bedType: "Sofa Bed",
    numberOfRooms: 10,
    count: 2,
    bedCombinationId: "2-2-17-2834e954",
  },
  {
    bedType: "King Bed/ 181-200 cm",
    numberOfRooms: 10,
    count: 1,
    bedCombinationId: "2-2-17-2834e954",
  },
  {
    bedType: "Twin Bed/ 90-130 cm",
    numberOfRooms: 20,
    count: 2,
    bedCombinationId: "2-2-17-639e7445",
  },
  {
    bedType: "Double Bed",
    numberOfRooms: 20,
    count: 1,
    bedCombinationId: "2-2-17-639e7445",
  },
];

function returnArray(array) {
  const superMap = new Map();

  for (let i of array) {
    if (superMap.has(i.bedCombinationId)) {
      superMap
        .get(i.bedCombinationId)
        ["bedTypes"].push({ bedType: i.bedType, count: i.count });
    } else {
      let object = {
        bedCombinationId: i.bedCombinationId,
        numberOfRooms: i.numberOfRooms,
        bedTypes: [{ bedType: i.bedType, count: i.count }],
      };

      superMap.set(i.bedCombinationId, object);
    }
  }

  return superMap;
}

console.log(returnArray(sampleArray));
