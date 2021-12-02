import React from 'react'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'

const AlertComponent = ({ context, color }) => {
  const [open, setOpen] = React.useState(true)
  return (
    <Box
      sx={{
        width: '30%',
        display: 'flex',
        marginBottom: '10px',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Collapse in={open}>
        <Alert
          severity={color}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {context}
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true)
        }}
      >
        Re-open
      </Button>
    </Box>
  )
}

export default AlertComponent
