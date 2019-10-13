export class GitHubEnqModel {
    full_name: string;
    updated_at: Date;
    stargazers_count: number;
    language: string;
    html_url: string;
    description: string;
}

export class GitHubEnqRespModel {
    total_count: number;
    incomplete_results: boolean;
    items: Array<GitHubEnqModel>;
}