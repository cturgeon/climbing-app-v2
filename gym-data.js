const gymData = [
  {
    id: "gym1",
    name: "Climb Nashville East",
    image: "/images/climb-east.jpg",
    address: "East Nashville Nashville, TN",
    description: "There is a lot of fun bouldering here!",
    walls: [
      {
        id: "wall1",
        name: "vertical wall",
        image: "/images/vertical-wall.jpg",
        climbs: [
          {
            id: "route1",
            name: "the pink one",
            grade: "v1",
            image: "/images/route1.jpg",
            description: "piches in the middle, tough topout",
            beta: "don't miss the heel-toe cam. top out is hard, trust high foot",
          },
          {
            id: "route2",
            name: "the blue one",
            grade: "v2",
            image: "/images/route1.jpg",
            description: "piches in the middle, tough topout",
            beta: "don't miss the heel-toe cam. top out is hard, trust high foot",
          },
          {
            id: "route3",
            name: "the red one",
            grade: "v6",
            image: "/images/route1.jpg",
            description: "piches in the middle, tough topout",
            beta: "don't miss the heel-toe cam. top out is hard, trust high foot",
          },
        ],
      },
      {
        id: "wall2",
        name: "Overhang wall",
        image: "/images/overhang-wall.jpg",
        climbs: [
          {
            id: "route1",
            name: "the blue one",
            grade: "v7",
            image: "/images/climb-east.jpg",
            description: "piches in the middle, tough topout",
            beta: "don't miss the heel-toe cam. top out is hard, trust high foot",
          },
          {
            id: "route2",
            name: "the green one",
            grade: "v6",
            image: "/images/climb-east.jpg",
            description: "piches in the middle, tough topout",
            beta: "don't miss the heel-toe cam. top out is hard, trust high foot",
          },
          {
            id: "route3",
            name: "the orange one",
            grade: "v7",
            image: "/images/climb-east.jpg",
            description: "piches in the middle, tough topout",
            beta: "don't miss the heel-toe cam. top out is hard, trust high foot",
          },
        ],
      },
    ],
  },
  {
    id: "gym2",
    name: "Climb Nashville West",
    image: "/images/climb-west.jpg",
    address: "West Nashville Nashville, TN",
    description: "You can do all kinds of climbing here!",
    walls: [],
  },
  {
    id: "gym3",
    name: "The other Nashville Gym",
    image: "/images/crag-nashville.jpg",
    address: "Somewhere South Nashville, TN",
    description: "Let's find out what we can do here!",
    walls: [],
  },
];

export function getAllGymData() {
  return gymData;
}

export function getGymData(gymId) {
  return gymData.find((gym) => gym.id === gymId);
}
