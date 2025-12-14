const chores = [
    {
        name: 'Empty trash & replace liner',
        value: .25,
        complete: false,
        subChores: [
            {name: 'Kitchen'},
            {name: 'Bathroom'},
            {name: 'Laundry'},
            {name: 'Parents'},
            {name: 'Roe'},
            {name: 'Elise'}
        ]
    },
    {
        name: 'Dishes',
        value: .25,
        complete: false,
        subChores: [
            {
                name: 'Collect dishes',
                subChores: [
                    {name: "from the table"},
                    {name: "from the countertop"},
                    {name: "from the stovetop"},
                ]
            },
            {name: 'Empty dishwasher'},
            {name: 'Load dishwasher'},
            {name: 'Wipe down sink'}
        ]
    },
    {
        name: 'Kitchen table',
        value: .25,
        complete: false,
        subChores: [
            {name: 'Clear tabletop'},
            {name: 'Wipe down tabletop'},
            {name: 'Wipe down chairs/benches'}
        ]
    },
    {
        name: 'Kitchen counter',
        value: .25,
        complete: false,
        subChores: [
            {name: 'Clear countertop'},
            {name: 'Wipe down countertop'}
        ]
    },
    {
        name: 'Stove',
        value: .25,
        complete: false,
        subChores: [
            {name: 'Clear stovetop'},
            {name: 'Wipe down stove controls'},
            {name: 'Wipe down stovetop'},
            {name: 'Wipe down oven door and handle'}
        ]
    },
    {
        name: 'Vacuum rugs and hardwood floors',
        value: .25,
        complete: false,
        subChores: [
            {name: 'Kitchen'},
            {name: 'Stairway'},
            {name: 'Laundry'},
            {name: 'Hallway'},
            {name: 'Bathroom'}
        ]
    },
    {
        name: 'Mop',
        value: .25,
        complete: false,
        subChores: [
            {name: 'Kitchen'},
            {name: 'Stairway'},
            {name: 'Laundry'},
            {name: 'Hallway'},
            {name: 'Bathroom'}
        ]
    },
    {
        name: 'Couch',
        value: .25,
        complete: false,
        subChores: [
            {name: 'Clear off'},
            {name: 'Vacuum'},
            {name: 'Straighten cushons and pillows'}
        ]
    },
    {
        name: 'Livingroom counter',
        value: .25,
        complete: false,
        subChores: [
            {name: 'Clear countertop'},
            {name: 'Wipe down countertop'}
        ]
    },
    {
        name: 'Vacuum dog bed',
        value: .25,
        complete: false,
        subChores: []
    },
    {
        name: 'Wipe down bathroom mirror',
        value: .25,
        complete: false,
        subChores: []
    },
    {
        name: 'Clean bathroom sink',
        value: .25,
        complete: false,
        subChores: []
    },
    {
        name: 'Clean tub/shower',
        value: .25,
        complete: false,
        subChores: []
    },
    {
        name: 'Clean toilet',
        value: .25,
        complete: false,
        subChores: []
    },
    {
        name: 'Laundry',
        value: .25,
        complete: false,
        subChores: [
            {name: 'Collect clothes'},
            {name: 'Sort clothes'},
            {name: 'Load washer'},
            {name: 'Load dryer'},
            {name: 'Fold'},
            {name: 'Put away'}
        ]
    },
    {
        name: 'Declutter laundry room',
        value: .25,
        complete: false,
        subChores: []
    },
];

export default chores;