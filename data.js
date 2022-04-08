export const getRawData = () => {
  
  // let rawData = [
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:18:58 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:18:59 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:00 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:00 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:01 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:02 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:02 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:03 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:03 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:03 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:05 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:05 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:06 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:06 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:07 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:07 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:09 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:09 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:11 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:11 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:12 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:13 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:13 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:15 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:15 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:18 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:18 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:19 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:19 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:20 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:20 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:21 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:21 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:22 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:22 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:25 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:25 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:26 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:26 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:27 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:27 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:29 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:29 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:31 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:31 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:32 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:33 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:33 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:34 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:34 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:35 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:35 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:37 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:37 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:39 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:39 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:40 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:41 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:41 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:42 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:43 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:43 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:45 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:45 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:46 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:47 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:47 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:48 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:48 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:50 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:50 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:19:52 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:52 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:54 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:54 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:56 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:56 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:58 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:58 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:19:59 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:19:59 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:01 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:01 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:01 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:02 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:03 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:03 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:05 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:05 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:07 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:07 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:09 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:09 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:10 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:11 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:11 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:13 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:13 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:14 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:16 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:16 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:18 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:18 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:18 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:20 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:20 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:21 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:22 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:22 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:23 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:23 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:25 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:25 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:26 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:27 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:27 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:29 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:29 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:31 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:31 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:33 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:33 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:34 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:35 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:35 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:37 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:37 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 6:20:39 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:39 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:41 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:41 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:43 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:43 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:45 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:45 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:47 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:47 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:50 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:50 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:53 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:53 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 6:20:54 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:55 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 6:20:55 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   }
  // ]

  // let rawData = [
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:13 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:15 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:16 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:17 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:18 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:19 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:19 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:21 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:22 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:24 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:24 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:25 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:26 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:26 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:29 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:29 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:31 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:31 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:32 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:33 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:33 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:34 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:35 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:36 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:36 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:37 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:37 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:38 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:40 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:40 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:42 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:42 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:42 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:43 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:43 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:44 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:45 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:46 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:47 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:48 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:50 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:50 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:50 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:52 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:52 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:53 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:54 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:55 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:31:55 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:55 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:57 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:57 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:58 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:31:59 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:31:59 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:00 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:00 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:00 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:01 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:01 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:03 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:03 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:05 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:05 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:06 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:07 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:07 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:08 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:08 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:10 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:10 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:11 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:13 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:13 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:13 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:14 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:14 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:15 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:15 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:16 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:17 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:17 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:19 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:19 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:20 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:21 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:23 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:23 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:25 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:25 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:25 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:27 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:27 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:28 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:28 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:29 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:29 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:31 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:31 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:32 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:32 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:33 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:34 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:34 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:36 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:36 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:38 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:38 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:39 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:40 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:40 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:41 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:42 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:44 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:44 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:46 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:46 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:47 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:48 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:48 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:32:50 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:50 PM",
  //     "Size": 1,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:52 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:52 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:54 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:54 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:32:56 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:56 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:57 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:59 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:32:59 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:01 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:01 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:02 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:03 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:03 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:05 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:05 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:07 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:08 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:08 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:10 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:10 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:12 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:33:12 PM",
  //     "Size": 0,
  //     "Color": 0,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:33:14 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:15 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 1
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 3",
  //     "Timestamp": " 4/8/2022 8:33:16 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "gaze",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:33:16 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:17 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:17 PM",
  //     "Size": 1,
  //     "Color": 1,
  //     "Shape": 0
  //   },
  //   {
  //     "Event": "userButtonPress",
  //     "Location": " pedistol 1",
  //     "Timestamp": " 4/8/2022 8:33:20 PM",
  //     "Size": null,
  //     "Color": null,
  //     "Shape": null
  //   },
  //   {
  //     "Event": "createCTA",
  //     "Location": " pedistol 2",
  //     "Timestamp": " 4/8/2022 8:33:20 PM",
  //     "Size": 0,
  //     "Color": 1,
  //     "Shape": 0
  //   }
  // ]

  let rawData = [
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:36 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "gaze",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:52:37 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:39 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:52:40 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:52:40 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:52:42 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:43 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:44 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:45 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:46 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:52:47 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:52:50 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:52:51 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "gaze",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:52:51 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:52:52 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:52:53 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:52:54 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:55 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:52:55 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "gaze",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:55 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:56 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:57 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:52:59 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:00 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:01 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:02 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:02 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:03 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:04 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:05 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:06 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:07 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:07 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:09 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:09 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:10 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:10 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:11 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:12 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:13 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:14 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:15 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:17 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:17 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:19 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:19 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "gaze",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:19 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:21 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:21 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:22 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:23 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:23 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:24 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:25 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:26 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:27 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:28 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:29 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:30 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:31 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:32 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:33 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:34 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:35 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:36 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:37 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:38 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:39 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:40 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:41 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:42 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:43 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:44 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:46 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:47 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:48 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:49 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:50 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:50 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:53:53 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:54 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:55 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:56 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:56 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:53:59 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:53:59 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:00 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:00 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:01 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:04 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:04 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:05 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:08 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:08 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:09 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:10 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:11 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:11 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:12 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:14 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:15 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:16 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:17 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 1
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:17 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:19 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:20 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:21 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "gaze",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:22 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:22 PM",
      "Size": 1,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:23 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:54:23 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 1",
      "Timestamp": " 4/8/2022 8:54:26 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:27 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:29 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:29 PM",
      "Size": 0,
      "Color": 1,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:31 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:32 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 0
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:35 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:35 PM",
      "Size": 0,
      "Color": 0,
      "Shape": 1
    },
    {
      "Event": "userButtonPress",
      "Location": " pedistol 2",
      "Timestamp": " 4/8/2022 8:54:38 PM",
      "Size": null,
      "Color": null,
      "Shape": null
    },
    {
      "Event": "createCTA",
      "Location": " pedistol 3",
      "Timestamp": " 4/8/2022 8:54:39 PM",
      "Size": 1,
      "Color": 0,
      "Shape": 0
    }
   ]

  return rawData

} 