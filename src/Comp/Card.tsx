import React from "react";
import { Box, Flex, HStack, chakra } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Card(){
  return (
    <Box
    bg="#edf3f8"
    _dark={{ bg: "#3e3e3e" }}
    p={10}
    w="full"
    >
        <Box p={{ base: 8, md: 8 }}
        mx={"auto"}
        m={5}
        bg="white"
        _dark={{ bg: "green.900" }}
        shadow="lg"
        rounded="lg">
            <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{ color: "white" }}
            >
                Hegra (Mada'in Salih)
            </chakra.h1>

            <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
            >
                Thousands of years ago, Hegra was a bustling trade hub in the Nabataean kingdom. Though it was left abandoned for about two millennia, the site still features the astounding architecture left behind — most of which was carved into cliffs. 
                The structures have drawn comparisons to another ancient city called Petra, which was also built by the Nabataeans.
                Al-Hijr is a small village. It belongs to Wadi al Gura and is located at one day's travel inside the mountains. It was the homeland of the Thamudians. I have seen those mountains and their carvings. Their houses are similar to ours but are carved in the mountains, which are called the Ithlib mountains. 
                It looks as if they are a continuous range but they are separated and have sand dunes around them. You can reach the top of the mountains, but this is extremely tiring. The well of the Thamudians which is mentioned in the Holy Quran is located in the middle of the mountains.
            </chakra.p>
        </Box>
        <Box p={{ base: 8, md: 8 }}
        mx={"auto"}
        m={5}
        bg="white"
        _dark={{ bg: "green.900" }}
        shadow="lg"
        rounded="lg">
            <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{ color: "white" }}
            >
                Rejal Alma'a Muesum
            </chakra.h1>

            <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
            >
                Rijal Almaa is a village located in the Rijal Almaa province, 'Asir Region, Saudi Arabia. It is about 50 km (31 mi) west of Abha, in the southwest of Saudi Arabia. The village is more than 900 years old.
                The village includes several buildings, which consist of several floors, some reaching eight floors, they were made of stones and they also have colored wooden windows. They also contain inscriptions that appear on the interior walls of rooms. 
                The art used in these inscriptions is known as the "Al-Qatt art", in which harmonious shapes and colors are usually placed by village women. In the outer courtyards of the houses, there are some wooden chairs and furnished mats, with shapes colored in green, white, yellow, and red, also present on the windows and wooden doors.
            </chakra.p>
        </Box>
        <Box p={{ base: 8, md: 8 }}
        mx={"auto"}
        m={5}
        bg="white"
        _dark={{ bg: "green.900" }}
        shadow="lg"
        rounded="lg">
            <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{ color: "white" }}
            >
                Diriyah
            </chakra.h1>

            <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
            >
                Diriyah was the original home of the Saudi royal family, and served as the capital of the Emirate of Diriyah under the first Saudi dynasty from 1727 to 1818.
                The ruins of the old city of Diriyah lay on either side of the narrow valley known as Wadi Hanifa, which continues southwards through Riyadh and beyond. Consisting almost entirely of mud-brick structures, the ruins are divided into three districts, Ghussaibah, Al-Mulaybeed, and Turaif set on top of hills overlooking the valley. 
                Of the three, Turaif is the highest, and its bottom is easily accessible to tourists by foot. Part of the city wall, running along the edges of the wadi and also made of mud bricks, are still extant along with some short observation towers.
            </chakra.p>
        </Box> 
        <Box p={{ base: 8, md: 8 }}
        mx={"auto"}
        m={5}
        bg="white"
        _dark={{ bg: "green.900" }}
        shadow="lg"
        rounded="lg">
            <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{ color: "white" }}
            >
                AlMasmak
            </chakra.h1>

            <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: "gray.400" }}
            >
                The magnificent Al Masmak Palace stands erected gracefully in the middle of Riyadh city as a tourist destination having silently witnessed great events in the history of KSA foundation.
                The magnificent Al Masmak Palace stands erected gracefully in the middle of Riyadh city as a tourist destination having silently witnessed great events in the history of KSA foundation.
                The palace was constructed in the hijri 14th century during the reign of Imam Abdullah bin Faisal as his residence and the center of power and money. The palace is a strong fort against enemies with its solid high walls. It has only two entrances and small openings in the walls for gun barrels at the time of battles. Today, the palace stands as a symbol of the history of regaining power and rule of the country displaying in its corridors the features of that era and its leaders after it had been turned into a museum in 1995/1416.
            </chakra.p>
        </Box> 
    </Box>  
  );
};