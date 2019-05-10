gcloud container node-pools create web --cluster=website \
  --machine-type=f1-micro --disk-size=10gb --preemptible --num-nodes=3