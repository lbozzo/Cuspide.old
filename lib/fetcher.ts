const fetcher = (args: any) => fetch(args).then((r) => r.json());

export default fetcher;
