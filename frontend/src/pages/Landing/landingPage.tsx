import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Tab, Tabs, Typography } from "@mui/material";
import image3 from '../../images/image3.jpg'

interface CircularNavigationProps {
    isOpen: boolean;
    onClose: () => void;
}

const CircularNavigation: React.FC<CircularNavigationProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleScroll = () => {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        };

        handleScroll(); // Initialize scroll behavior

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto'; // Restore default scroll behavior
        };
    }, [isOpen]);

    const handleClickOutside = (event: MouseEvent) => {
        const modal = document.getElementById('circular-navigation-modal');
        if (modal && !modal.contains(event.target as Node)) {
            onClose();
        }
    };

    return (
        <div className={`fixed mt-1 top-5 left-0 w-full h-full flex justify-center items-center z-20 ${isOpen ? 'block' : 'hidden'}`}>
            <div id="circular-navigation-modal" className={`absolute z-30 bg-transparent p-4`}>
                {/* Your circular navigation content goes here */}
                <div className="flex justify-center items-center text-white">
                    <button className="m-1 px-2 rounded-full bg-blue-500 hover:bg-blue-400 w-30 h-10 flex justify-center items-center">
                        Resume.Ai
                    </button>
                    <button className="m-1 px-2 rounded-full bg-blue-500 hover:bg-blue-400 w-30 h-10 flex justify-center items-center">
                        CoverLetter.Ai
                    </button>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20 ${isOpen ? 'block' : 'hidden'}`}></div>
        </div>
    );
};




const Landing = () => {
    const [tabValue, setTabValue] = useState(0);
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTabValue(newValue);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    
    return (
        <div className='text-center'>
            <div className='flex justify-center items-center' style={{ 
                position: 'relative',
                height: '80vh'
            }}>
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '100%', // adjust as needed
                    backgroundImage: `url(${image3})`,
                    zIndex: -1,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}/>
                <div className="">
                    <div className='text-white' style={{ fontSize: '2rem' }}>Leverage AI for Customized Resumes to <br></br> Match Any Job Listing</div>
                    <div className='text-white my-4'>
                        <h3>A next-generation intelligent resume/cover letter builder for <br></br> enabling more effective job applications.</h3>
                    </div>
                    <div className='mt-8'>
                        <button onClick={toggleNav} className='bg-blue-500 hover:bg-blue-400 text-white p-2 px-4 rounded-3xl my-2 ml text-sm'>START NOW</button>
                    </div>
                </div>
            </div>

            {isNavOpen && <CircularNavigation isOpen={isNavOpen} onClose={toggleNav} />}

            <div className='p-4 bg-blue-500' style={{ display: 'grid', gridTemplateRows: 'auto', gridTemplateColumns: '1fr 1fr 1fr' }}>
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

            <div className='p-4 bg-white ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src='https://via.placeholder.com/300' alt='placeholder image' />
                <div className='text-black my-4' style={{ fontSize: '1rem' }}>
                    Lorem Ipsum
                </div>
                <div className='text-black my-2' style={{ fontSize: '.8rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum dolor nec tempus sodales. In lorem diam, placerat ac lectus in, lobortis volutpat augue. Fusce ornare non libero at bibendum. Sed leo elit, mattis sit amet sem ut, lobortis viverra augue. Nullam est metus, molestie ac justo at, suscipit luctus eros. Vivamus eu semper odio. Proin urna dolor, rhoncus sed posuere ut, ultrices vel nibh. Cras pulvinar risus nec risus tincidunt ullamcorper. Cras ut dui augue. Quisque tempor magna vel nisi fermentum, in tristique risus varius.
                </div>
            </div>

            <div className='p-4 bg-blue-500'>
                <Typography variant="h5" gutterBottom className="text-white">
                    Tabs Section
                </Typography>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    // indicatorColor="primary"
                    // textColor="secondary"
                    centered
                >
                    <Tab label="Tab 1" />
                    <Tab label="Tab 2" />
                    <Tab label="Tab 3" />
                </Tabs>
                <Typography className="text-white">
                    {tabValue === 0 && <div>
                        Lorem ipsum dolor sit ame, consectetur adipiscing elit. Suspendisse venenatis enim dolor, eget fermentum turpis efficitur ac. Ut a nibh non lacus suscipit rhoncus dapibus at arcu. Nam pellentesque eget purus ut commodo. Morbi accumsan, magna ultrices pharetra aliquet, neque eros tincidunt arcu, euismod feugiat turpis ipsum sit amet magna. Nunc at mattis metus. Sed ut tristique arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed auctor tortor. Nullam sit amet eros augue. Vestibulum orci turpis, tristique ut nisl at, finibus auctor leo.
                    </div>}
                    {tabValue === 1 && <div>
                        Lorem ipsum dolor sit am, consectetur adipiscing elit. Suspendisse venenatis enim dolor, eget fermentum turpis efficitur ac. Ut a nibh non lacus suscipit rhoncus dapibus at arcu. Nam pellentesque eget purus ut commodo. Morbi accumsan, magna ultrices pharetra aliquet, neque eros tincidunt arcu, euismod feugiat turpis ipsum sit amet magna. Nunc at mattis metus. Sed ut tristique arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed auctor tortor. Nullam sit amet eros augue. Vestibulum orci turpis, tristique ut nisl at, finibus auctor leo.
                    </div>}
                    {tabValue === 2 && <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis enim dolor, eget fermentum turpis efficitur ac. Ut a nibh non lacus suscipit rhoncus dapibus at arcu. Nam pellentesque eget purus ut commodo. Morbi accumsan, magna ultrices pharetra aliquet, neque eros tincidunt arcu, euismod feugiat turpis ipsum sit amet magna. Nunc at mattis metus. Sed ut tristique arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed auctor tortor. Nullam sit amet eros augue. Vestibulum orci turpis, tristique ut nisl at, finibus auctor leo.
                    </div>}
                </Typography>
            </div>

            <div className='p-4 bg-white' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src='https://via.placeholder.com/300' alt='placeholder image' />
                <div className='text-black my-4' style={{ fontSize: '1rem' }}>
                    Lorem Ipsum
                </div>
                <div className='text-black my-2' style={{ fontSize: '.8rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum dolor nec tempus sodales. In lorem diam, placerat ac lectus in, lobortis volutpat augue. Fusce ornare non libero at bibendum. Sed leo elit, mattis sit amet sem ut, lobortis viverra augue. Nullam est metus, molestie ac justo at, suscipit luctus eros. Vivamus eu semper odio. Proin urna dolor, rhoncus sed posuere ut, ultrices vel nibh. Cras pulvinar risus nec risus tincidunt ullamcorper. Cras ut dui augue. Quisque tempor magna vel nisi fermentum, in tristique risus varius.
                </div>
            </div>
        </div>
    );
}

export default Landing;
