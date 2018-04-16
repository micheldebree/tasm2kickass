VERSION=$(shell git describe --tags --dirty --always)
IMAGE=micheldebree/tasm2kickass

test: image
	docker run -t --rm -v "$$PWD":/workspace $(IMAGE):latest "ouwe sokke"

image: Dockerfile tmpview
	docker build -t $(IMAGE) .

push: image
	docker tag $(IMAGE):latest $(IMAGE):$(VERSION)
	docker push $(IMAGE):$(VERSION)
	docker push $(IMAGE):latest

debug: image
	docker run -it --rm -v "$$PWD":/workspace --entrypoint /bin/bash $(IMAGE):latest

tmpview:
	wget --no-check-certificate --output-document tmpview.zip  https://csdb.dk/release/download.php?id=175337 && unzip tmpview.zip
	unzip -o tmpview.zip
	mv TMPview_v1.3.1-STYLE/linux-x86_64/tmpview .
	chmod +x ./tmpview
	rm -rf TMPView_v1.3.1-STYLE
	rm tmpview.zip
