import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import { ServeStaticModule } from "@nestjs/serve-static/dist/serve-static.module";
import { join } from "path";
import Next from "next";
import { AppController } from "./app.controller";
import { BlogController } from "./blog/blog.controller";
import { BlogService } from "./blog/blog.service";
import {ServicesController} from "./services/services.controller"
import {Services} from "./services/services.module"

@Module({
	imports: [
		RenderModule.forRootAsync(
			Next({
				dev: process.env.NODE_ENV !== "production",
				conf: { useFilesystemPublicRoutes: false },
			})
		),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, "..", "public"),
		}),
	],
	controllers: [AppController, ServicesController, BlogController],
	providers: [BlogService, Services],
})
export class AppModule {}
