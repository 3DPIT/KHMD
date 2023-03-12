import { signOut } from 'features/sign/api/signApi';
import { useNavigate } from 'react-router-dom';
interface ReturnType {
    onClickMenu: (url: string) => void;
}
export function useMenuHandler(): ReturnType {
    const navigate = useNavigate();
    const signOutHandle = (): void => {
        signOut();
        navigate('/signIn');
    };
    const onClickMenu = (url: string): void => (url == '/logOut' ? signOutHandle() : navigate(url));

    return { onClickMenu };
}
