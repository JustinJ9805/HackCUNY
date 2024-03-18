import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Tab, Tabs, Typography } from "@mui/material";

const Landing = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div className='p-8 py-2 bg-slate-800 rounded-lg mt-2 text-center'>
            <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg'>
                <div className='text-white' style={{ fontSize: '2rem' }}>Leverage AI for Customized Resumes to <br></br> Match Any Job Listing</div>
                <div className='text-white my-4' style={{ fontSize: '14px', opacity: '.65' }}>
                    Local Ai is a next-generation intelligent resume builder for <br></br> enabling more effective job applications.
                </div>
                <div className='mt-8'>
                    <Link to='/signUp'>
                        <button className='bg-blue-500 text-white p-2 px-6 rounded-lg my-2 ml'>Try Now</button>
                    </Link>
                </div>
            </div>

            <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg' style={{ display: 'grid', gridTemplateRows: 'auto', gridTemplateColumns: '1fr 1fr 1fr' }}>
                <div className='text-white' style={{ fontSize: '1rem', alignItems: 'flex-start' }}>Instant Generation
                    <div className='text-white' style={{ fontSize: '12px', opacity: '.65' }}>
                        Generated content trained <br></br>by best practices.
                    </div>
                </div>

                <div className='text-white' style={{ fontSize: '1rem' }}>Tailored Content
                    <div className='text-white' style={{ fontSize: '12px', opacity: '.65' }}>
                        Target keywords for your <br></br>application.
                    </div>
                </div>

                <div className='text-white' style={{ fontSize: '1rem' }}>Natural
                    <div className='text-white' style={{ fontSize: '12px', opacity: '.65' }}>
                        More natural than a <br></br>professional writer.
                    </div>
                </div>
            </div>

            <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src='https://via.placeholder.com/300' alt='placeholder image' />
                <div className='text-white my-4' style={{ fontSize: '1rem' }}>
                    Lorem Ipsum
                </div>
                <div className='text-white my-2' style={{ fontSize: '.8rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum dolor nec tempus sodales. In lorem diam, placerat ac lectus in, lobortis volutpat augue. Fusce ornare non libero at bibendum. Sed leo elit, mattis sit amet sem ut, lobortis viverra augue. Nullam est metus, molestie ac justo at, suscipit luctus eros. Vivamus eu semper odio. Proin urna dolor, rhoncus sed posuere ut, ultrices vel nibh. Cras pulvinar risus nec risus tincidunt ullamcorper. Cras ut dui augue. Quisque tempor magna vel nisi fermentum, in tristique risus varius.
                </div>
            </div>

            <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg'>
                <Typography variant="h5" gutterBottom className="text-white">
                    Tabs Section
                </Typography>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Tab 1" />
                    <Tab label="Tab 2" />
                    <Tab label="Tab 3" />
                </Tabs>
                <Typography>
                    {tabValue === 0 && <div>
                        Lorem ipsum dolor sit ame, consectetur adipiscing elit. Suspendisse venenatis enim dolor, eget fermentum turpis efficitur ac. Ut a nibh non lacus suscipit rhoncus dapibus at arcu. Nam pellentesque eget purus ut commodo. Morbi accumsan, magna ultrices pharetra aliquet, neque eros tincidunt arcu, euismod feugiat turpis ipsum sit amet magna. Nunc at mattis metus. Sed ut tristique arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed auctor tortor. Nullam sit amet eros augue. Vestibulum orci turpis, tristique ut nisl at, finibus auctor leo.
                    </div>}
                    {tabValue === 1 && <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis enim dolor, eget fermentum turpis efficitur ac. Ut a nibh non lacus suscipit rhoncus dapibus at arcu. Nam pellentesque eget purus ut commodo. Morbi accumsan, magna ultrices pharetra aliquet, neque eros tincidunt arcu, euismod feugiat turpis ipsum sit amet magna. Nunc at mattis metus. Sed ut tristique arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed auctor tortor. Nullam sit amet eros augue. Vestibulum orci turpis, tristique ut nisl at, finibus auctor leo.
                    </div>}
                    {tabValue === 2 && <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis enim dolor, eget fermentum turpis efficitur ac. Ut a nibh non lacus suscipit rhoncus dapibus at arcu. Nam pellentesque eget purus ut commodo. Morbi accumsan, magna ultrices pharetra aliquet, neque eros tincidunt arcu, euismod feugiat turpis ipsum sit amet magna. Nunc at mattis metus. Sed ut tristique arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed auctor tortor. Nullam sit amet eros augue. Vestibulum orci turpis, tristique ut nisl at, finibus auctor leo.
                    </div>}
                </Typography>
            </div>

            <div className='my-2 mx-4 p-4 bg-slate-700 rounded-lg' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src='https://via.placeholder.com/300' alt='placeholder image' />
                <div className='text-white my-4' style={{ fontSize: '1rem' }}>
                    Lorem Ipsum
                </div>
                <div className='text-white my-2' style={{ fontSize: '.8rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum dolor nec tempus sodales. In lorem diam, placerat ac lectus in, lobortis volutpat augue. Fusce ornare non libero at bibendum. Sed leo elit, mattis sit amet sem ut, lobortis viverra augue. Nullam est metus, molestie ac justo at, suscipit luctus eros. Vivamus eu semper odio. Proin urna dolor, rhoncus sed posuere ut, ultrices vel nibh. Cras pulvinar risus nec risus tincidunt ullamcorper. Cras ut dui augue. Quisque tempor magna vel nisi fermentum, in tristique risus varius.
                </div>
            </div>
        </div>
    );
}

export default Landing;
