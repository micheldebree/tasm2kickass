build:
	docker build -t micheldebree/tasm2kickass .

push: build
	docker push micheldebree/tasm2kickass
