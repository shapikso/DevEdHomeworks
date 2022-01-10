import axios from "axios";
import { TGet } from "../type";

const token = 'Bearer eyJraWQiOiJXVjdcL3pXR0FydzdsR1wvUU9tT1wvY1JPYnZoZ2ZSa1JtVnlLVk80RXBkR2lrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJ2NjNxdWtuZGMwMmFkdnF0azU5NWloODczIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJmb290YmFsbC5lbGVuYXNwb3J0LmlvXC9HRVQ6KiIsImF1dGhfdGltZSI6MTY0MTg0MDUyMywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfd080Q0J3N0x3IiwiZXhwIjoxNjQxODQ0MTIzLCJpYXQiOjE2NDE4NDA1MjMsInZlcnNpb24iOjIsImp0aSI6IjgwODhiMzdmLTAxMjMtNDlmNS04MjdlLTQ5ZWFkMjA5NTAyMCIsImNsaWVudF9pZCI6InY2M3F1a25kYzAyYWR2cXRrNTk1aWg4NzMifQ.YVcCnDflcOjDa2u7_RFZ5n24DUssS6h0M9HluE-wtbaXvF0p3o92gmwZ4HK9yjJeQVSIcRYvg_6JBPea4-5bx8MpJ37RvuTrU_8lD0z-DYjHyFVlGKz09D1ChGwl0xod8HiiFpRLMw53CjVGDIBkxkMTWOAK56y8op4wh9XNaBqKoFg9nCz4ii_49D8U8Wf14n7u2iBf0sC2kFK4GF234GR0pwI9Ix-8Is68-pBBap0wKiKgVmjZQtLBrVa5LlugOaEftXc2f3vYOSH9KzYwCCHURTt1RjajBQCxg7HmiUMeJUmxi1GF2vh3XSGx2MWbiZygfWyhL4oRb9ryjT2CGg'

export const getSeason = async (): Promise<TGet> => {
    try {
        const countries = await axios.get('https://football.elenasport.io/v2/seasons', { headers: { Authorization: token } })
        return { result: countries.data };
    } catch (error) {
        return { error: error.message };
    }
}
