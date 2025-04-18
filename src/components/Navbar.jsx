import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  InputBase,
  Paper,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import EventIcon from '@mui/icons-material/Event';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { searchService } from '../services/searchService';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = [
        ...searchService.searchBuses(query).map(item => ({ ...item, category: 'buses' })),
        ...searchService.searchServices(query).map(item => ({ ...item, category: 'services' })),
        ...searchService.searchContact(query).map(item => ({ ...item, category: 'contact' }))
      ];
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (result) => {
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    
    switch (result.category) {
      case 'buses':
        navigate('/fleet');
        break;
      case 'services':
        navigate('/');
        setTimeout(() => {
          const servicesSection = document.getElementById('services-section');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState({ scrollToService: result.id }, document.title);
            window.dispatchEvent(new Event('click'));
          }
        }, 100);
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  const getIconForCategory = (category) => {
    switch (category) {
      case 'buses':
        return <DirectionsBusIcon />;
      case 'services':
        return <EventIcon />;
      case 'contact':
        return <ContactPhoneIcon />;
      default:
        return null;
    }
  };

  const renderSearchResult = (result) => {
    let displayName = result.name;
    let displayDesc = result.description;

    if (result.category === 'services') {
      displayName = result.title;
      displayDesc = result.keywords.join(', ');
    }

    return (
      <ListItem
        key={`${result.category}-${result.id}`}
        button
        onClick={() => handleResultClick(result)}
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        <ListItemIcon>
          {getIconForCategory(result.category)}
        </ListItemIcon>
        <ListItemText
          primary={displayName}
          secondary={displayDesc}
        />
      </ListItem>
    );
  };

  const pages = [
    { text: 'Home', path: '/' },
    { text: 'Bus Gallery', path: '/fleet' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {pages.map((item) => (
          <ListItem key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          BusRental
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex', gap: 4 }}>
              {pages.map((page) => (
                <Button
                  key={page.text}
                  component={Link}
                  to={page.path}
                  sx={{
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 'medium',
                    padding: '12px 16px',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#1976d2',
                      transform: 'scale(1.05)',
                      backgroundColor: 'transparent'
                    },
                  }}
                >
                  {page.text}
                </Button>
              ))}
            </Box>
            <Box sx={{ position: 'relative' }} ref={searchRef}>
              {searchOpen ? (
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '0 8px',
                  ml: 2
                }}>
                  <InputBase
                    placeholder="Search buses, services, contact..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    autoFocus
                    sx={{
                      color: 'white',
                      '& input': {
                        padding: '4px 8px',
                        fontSize: '0.9rem',
                        '&::placeholder': {
                          color: 'rgba(255, 255, 255, 0.7)',
                        },
                      },
                    }}
                  />
                  <IconButton
                    color="inherit"
                    onClick={handleSearchToggle}
                    size="small"
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  color="inherit"
                  onClick={handleSearchToggle}
                  sx={{ ml: 2 }}
                >
                  <SearchIcon />
                </IconButton>
              )}
              {searchResults.length > 0 && (
                <Paper
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    maxHeight: '400px',
                    overflow: 'auto',
                    mt: 1,
                    zIndex: 1000,
                  }}
                >
                  <List>
                    {searchResults.map(renderSearchResult)}
                  </List>
                </Paper>
              )}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 