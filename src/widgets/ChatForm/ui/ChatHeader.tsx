import {Avatar, Box, Stack, Typography} from '@mui/material';
import {Chat} from '../../../entities/chats/model/types';
import {useStyles} from './styles';

type ChatHeaderProps = {
    interlocutor: Chat['interlocutor'];
};

const ChatHeader = ({interlocutor}: ChatHeaderProps) => {
    const styles = useStyles();

    return (
        <Box sx={styles.chatHeader}>
            <Stack sx={styles.chatHeaderUser}>
                <Avatar src="" alt="" sx={styles.chatHeaderUserImage} />
                <Typography sx={styles.chatHeaderUserName}>
                    {interlocutor.name}
                </Typography>
            </Stack>
        </Box>
    );
};

export default ChatHeader;
