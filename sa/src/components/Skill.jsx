import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Card from './Card'
import data from '../data'

export default function Skill() {
    const [tab, setTab] = React.useState(data)
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const contentElem = tab.map(item => {
        return (
            <div>
                {parseInt(value) == item.id ?
                    <TabPanel value={value} sx={{ width: '100%', padding: "35px 0px" }}>
                        <Card item={item} id={item.id} key={item.id} />
                    </TabPanel> :
                    null
                }
            </div>
        )
    })

    return (
        <div className='skill' id='skillset'>
            <h1>Skillset</h1>
            <Box sx={{ width: '100%', typography: 'poppins' }} >
                <TabContext value={value} >
                    <Box >
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            sx={{
                                "& button": {
                                    fontSize: '25px',
                                    '@media (max-width: 600px)': {
                                        fontSize: '12px',
                                        margin: '0px 4px'
                                    },
                                    fontWeight: '300',
                                    fontFamily: 'poppins',
                                    color: 'rgb(255, 255, 255)',
                                    margin: '3px 40px',
                                    transition: 'all 0.3s ease'
                                },
                                "& button:hover": { transform: 'translateY(-3px)' },
                                "& button:focus": { color: '#EB725C' },
                                "& button:active": { color: '#EB725C' },
                                "& button.Mui-selected": { color: '#EB725C', fontFamily: 'poppins' }
                            }}
                            TabIndicatorProps={{ sx: { backgroundColor: '#EB725C' } }}
                            centered
                        >
                            <Tab label="coding" value="1" />
                            <Tab label="e-commerce" value="2" />
                            <Tab label="others" value="3" />
                        </TabList>
                    </Box>
                    <div className="content">
                        {contentElem}
                    </div>
                </TabContext>
            </Box>
        </div>
    );
}