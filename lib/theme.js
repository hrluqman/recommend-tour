import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
      body: {
        bg: '#EDEDED'
      }
    })
}

const theme = extendTheme({ styles, colors: {primary: "#EDEDED"} })
export default theme  