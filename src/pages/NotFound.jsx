function NotFound() {
    return (
      <section className="pt-24 px-[6.25%] text-navy transition-all mb-20 sm:mb-12 min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
              <div className="text-9xl font-semibold hover:text-darknavy transition">404</div>
              <h1 className="text-lg font-semibold">Page Not Found</h1>
              <p className="mt-3">Uh-oh! We couldn&apos;t find the page you&apos;re searching for.</p>
          </div>
      </section>
    );
}

export default NotFound;
