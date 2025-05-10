import pandas as pd
import os

input_file = "../data/scores.csv"
output_file = "../output/candidate_averages.csv"

df = pd.read_csv(input_file)

df['Average'] = df.iloc[:, 1:].mean(axis=1)

df[['Candidate', 'Average']].to_csv(output_file, index=False)

print("Average scores calculated and saved to:", output_file)
