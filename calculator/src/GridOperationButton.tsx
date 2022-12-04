import { Button, Grid, styled } from "@mui/material";

interface GridOperationButtonProps {
    operation: string;
    selectOperation: (operatiion: string) => void;
    selectedOperation: string;
}

const StyledButton = styled(Button)<{selected: boolean}>((props) => ({
    backgroundColor: "#304B4B",
    borderColor: props.selected ? "#ffffff" : "#304B4B"
}));

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
    operation,
    selectedOperation,
    selectOperation,
}) => {
    return (
        <Grid item xs={3}>
            <StyledButton fullWidth
             variant="outlined"
            onClick={() => selectOperation(operation)}
            selected={selectedOperation === operation}>
                {operation}
            </StyledButton>
        </Grid>
)}
    