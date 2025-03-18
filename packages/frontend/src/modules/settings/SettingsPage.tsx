import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
} from '@mui/material';

const SettingsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Account Settings
          </Typography>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Email Notifications"
          />
          <Divider sx={{ my: 2 }} />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Push Notifications"
          />
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Privacy Settings
          </Typography>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Profile Visibility"
          />
          <Divider sx={{ my: 2 }} />
          <FormControlLabel control={<Switch />} label="Activity Status" />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Security Settings
          </Typography>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Two-Factor Authentication"
          />
          <Divider sx={{ my: 2 }} />
          <FormControlLabel control={<Switch />} label="Login Notifications" />
        </CardContent>
      </Card>
    </Box>
  );
};

export default SettingsPage;
