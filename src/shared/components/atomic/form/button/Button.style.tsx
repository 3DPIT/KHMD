import styled from '@emotion/styled';
import { Button } from '@mui/material';

interface CButtonProps  {
  variant: 'contained' | 'outlined';
  color: 'primary' | 'warning';
  size?: 'small' | 'large';
}

export const emotionButton = styled(Button)<CButtonProps>`
  background: ${(props) => (props.variant === 'contained' ? 'pink' : 'transparent')};
  color: black;
  width: ${(props) => (props.size === 'small' ? '10px' : 'auto')};
  height: ${(props) => (props.size === 'small' ? '10px' : 'auto')};
  padding: 8px 16px;
  border: none;
  border-radius: 100px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'cursor')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export function EmotionButton({...other}:CButtonProps){
    return (
        <emotionButton {...other}></emotionButton>
    )
}