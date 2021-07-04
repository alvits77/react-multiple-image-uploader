interface DataSource {
    id: string;
    dataURL: string;
}
interface RIUploaderProps {
    onUpload: (e: any) => void;
    onSelect: (e: any) => void;
    onRemove: (e: any) => void;
    warnMessage: string;
    dataSources: DataSource[];
}
export default RIUploaderProps;
