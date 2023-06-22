import { Button, Input, MenuList, chakra, Flex } from "@chakra-ui/react";

export const FormInput = chakra(Input, {
    baseStyle: {
        color: "loginFormPlace",
        _placeholder: {
            color: "loginFormPlace",
        },
        borderBottom: "5px solid",
        p:"12px"
    }
})

export const Submit = chakra(Button, {
    baseStyle: {
        w: "40%",
        fontSize: "md",
        p: "1.5rem",
        bg: "loginSubmit",
        rounded: "xl",
        color: "white",
        _hover: { 
            backgroundColor: "green.500", 
            color: "gray.300" 
        }
    }
})

export const Form = chakra("form", {
    baseStyle: {
        w: "100%",
        h: "100%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        gridTemplateRows: "1fr 5rem 5rem 1fr",
        gridTemplateColumns: "65%",
    }
})


export const Logout = chakra(MenuList, {
    baseStyle: {
        border: "none",
        shadow: "2xl",
        bg: "white",
        boxShadow: "1px 11px 8px -1px rgba(74,62,62,0.75);",
        minW: "0",
        w: "5rem",
    }
})

export const HeaderContainer = chakra(Flex, {
    baseStyle: {
        w: "100%",
        border: "1px solid #f2f2f2",
        align: "center",
        px: "2rem",
    }
})
