import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderRightWidth: 1,
  borderColor: theme.palette.primary.dark,
}));
