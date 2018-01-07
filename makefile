.DEFAULT_GOAL = all



all:
	(.\make.bat && .\git-commit.bat) || (echo "Failed to generate the html" && exit)

