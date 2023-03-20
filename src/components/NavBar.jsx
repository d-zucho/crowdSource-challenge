import { useState } from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
  Tooltip,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import GroupsIcon from '@mui/icons-material/Groups'
import './navBar.styles.css'

import { css } from '@emotion/react'

const NavBar = () => {
  // this creates an anchor Element Nav and a setter functioin
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  let pages = ['Home', 'About', 'Discover', 'Get Started']
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

  const handleOpenNavMenu = (e) => {
    //** event listener function to handle open Nav Menu *//
    setAnchorElNav(e.currentTarget)
  }

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null)
  }

  const handleOpenUserMenu = (e) => {
    // ** event listener function to handle open User Menu *//
    setAnchorElUser(e.currentTarget)
  }

  const handleCloseUserMenu = (e) => {
    // revert back to null state for closing
    setAnchorElUser(null)
  }

  return (
    <AppBar id='navAppBar' position='static'>
      <Container>
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
          <Typography
            variant='h6'
            noWrap // no wrap
            component='a' // anchor tag
            href='/' // link to home page
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' }, // hide on mobile
              fontFamily: 'Roboto',
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            CF
          </Typography>
          {/* // Nav Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              onClick={handleOpenNavMenu}
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
              anchorOrigin={{
                vertical: 'top',

                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open Settings'>
              <IconButton onClick={handleOpenUserMenu} sz={{ p: 0 }}>
                <Avatar
                  alt='replace with user name'
                  src='../assets/images/logo.svg'
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',

                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
