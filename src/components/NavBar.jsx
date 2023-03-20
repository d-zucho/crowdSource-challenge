import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Toolbar,
} from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import { fontFamily } from '@mui/system'

const NavBar = () => {
  // this creates an anchor Element Nav and a setter functioin
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  let pages = ['Home', 'About', 'Discover', 'Get Started']

  const handleOpenNavMenu = (e) => {
    //* event listener function to handle open Nav Menu
    setAnchorElNav(e.currentTarget)
  }

  const handleCloseNavMenu = (e) => {
    //* revert back to null state for closing
    setAnchorElNav(null)
  }

  return
  ;<AppBar position='static'>
    <Container maxWidth='xl'>
      <Toolbar disableGutters>
        <GroupsIcon
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            mr: 1, // margin right
          }}
        />
        <Typpography
          variant='h6'
          noWrap // no wrap
          component='a' // anchor tag
          href='/' // link to home page
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' }, // hide on mobile
            fontFamily: 'Roboto',
            letterSpacing: '.3rem',
            textDecorations: 'none',
          }}
        >
          CrowdFunding
        </Typpography>
        // Nav Menu
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          //* Nav Menu Icon
          <IconButton
            onClick={handleCloseNavMenu}
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            //* this is the anchor element ensures that the menu is attached to the button
            anchorOrigin={{
              vertical: 'top',
              //* this is the vertical position of the menu that looks like it's coming from the button
              horizontal: 'left', //* the horizontal position of the menu
            }}
            keepMounted // keeps the menu mounted in the DOM
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            //* if anchorElNav is null, then it's false *//
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              //* this is to hide the menu on desktop *//
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                //* we wanrt to close the menu when we click on a menu item *//
              >
                <Typography textAlign='center'>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <GroupsIcon
          sx={{
            display: {
              xs: 'flex',
              md: 'none',
            },
            mr: 1,
          }}
        />
        <Typography
          variant='h5'
          noWrap
          component='a'
          href=''
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            fontFamily: 'Roboto',
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecorations: 'none',
            color: 'inherit',
          }}
        >
          Logo
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                color: 'white',
                display: 'block',
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
        //* User Menu Icon *//
      </Toolbar>
    </Container>
  </AppBar>
}

export default NavBar
