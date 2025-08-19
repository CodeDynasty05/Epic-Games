import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputBase,
  Link,
  Divider,
} from "@mui/material";
import { ExpandMore, Search } from "@mui/icons-material";

const FilterAccordion = ({ title, children }) => (
  <Accordion
    defaultExpanded
    sx={{
      backgroundColor: "transparent",
      color: "white",
      boxShadow: "none",
      "&:before": { display: "none" },
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMore sx={{ color: "white" }} />}
      sx={{ p: 0 }}
    >
      <Typography fontWeight="bold">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ p: 0 }}>{children}</AccordionDetails>
  </Accordion>
);

const FiltersSidebar = () => {
  return (
    <Box sx={{ position: "sticky", top: "100px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Filters (1)</Typography>
        <Link href="#" sx={{ color: "#aaa", textDecoration: "none" }}>
          reset
        </Link>
      </Box>

      <InputBase
        startAdornment={<Search sx={{ color: "#aaa", mr: 1 }} />}
        placeholder="Keywords"
        sx={{
          width: "100%",
          backgroundColor: "#2a2a2a",
          borderRadius: "4px",
          p: "8px 12px",
          my: 2,
        }}
      />

      <FilterAccordion title="Events">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{ color: "#777" }} />}
            label="Summer Sale"
          />
        </FormGroup>
      </FilterAccordion>

      <Divider sx={{ my: 1, backgroundColor: "#444" }} />

      <FilterAccordion title="Price">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox sx={{ color: "#777" }} />}
            label="Free"
          />
        </FormGroup>
      </FilterAccordion>

      <Divider sx={{ my: 1, backgroundColor: "#444" }} />

      <FilterAccordion title="Types">
        <Select
          value="game"
          fullWidth
          sx={{
            backgroundColor: "#2a2a2a",
            color: "white",
            borderRadius: "4px",
            ".MuiOutlinedInput-notchedOutline": { borderColor: "#555" },
            ".MuiSvgIcon-root": { color: "white" },
          }}
        >
          <MenuItem value="game">Game</MenuItem>
          <MenuItem value="dlc">Game Add-On</MenuItem>
        </Select>
      </FilterAccordion>
    </Box>
  );
};

export default FiltersSidebar;
