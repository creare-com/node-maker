export interface Pipeline {
  id: number;
  name: string;
  data: any;
}

export interface PipelineResponse {
  message: string;
  status: string;
  pipelines: any;
  coordinates: any;
  outputs: any;
}