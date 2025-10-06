declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }

    const classNames: IClassNames;
    export = classNames;
}

declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"
declare module "*.svg" {
    const content: React.VFC<React.SVGProps<SVGElement>>;
    export default content;
}